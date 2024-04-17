from django.shortcuts import HttpResponse,render
from rest_framework.response import Response
from Addskills.models import Skills
from Addskills.serializer import SkillSerializer
from rest_framework import viewsets
from Myresume.models import Myprojects,MyExperience
from Myresume.serializer import MyProjectSerializer,MyExperienceSerializer
from Messages.models import Message
from Messages.serializer import MessageSerializer
from TexttoVoice.models import TexttoVoiceModel
from TexttoVoice.serializer import TexttoVoiceSerializer
from TexttoVoice.forms import TexttoVoiceForm
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from Documentation.models import RecursiveList
from Documentation.serializer import RecursiveListSerializer

class skillsModelViewSet(viewsets.ModelViewSet):
     queryset=Skills.objects.all()
     serializer_class=SkillSerializer

     def destroy(self, request,pk=None):
          model=Skills.objects.get(id=pk)
          model.delete()
          return Response({'msg':'Deleted successfully'})

class projectsModelViewSet(viewsets.ModelViewSet):
     queryset=Myprojects.objects.all()
     serializer_class=MyProjectSerializer
     
     def destroy(self, request,pk=None):
          model=Myprojects.objects.get(id=pk)
          model.delete()
          return Response({'msg':'Deleted successfully'})


class experienceModelViewSet(viewsets.ModelViewSet):
     queryset=MyExperience.objects.all().order_by('-id')
     serializer_class=MyExperienceSerializer

     def destroy(self, request,pk=None):
          model=MyExperience.objects.get(id=pk)
          model.delete()
          return Response({'msg':'Deleted successfully'})
     
# class ItemDocumentationModelViewSet(viewsets.ModelViewSet):
#      queryset=Item.objects.all().order_by('id')
#      serializer_class=ItemSerializer


class RecursivelistDocumentationModelViewSet(viewsets.ModelViewSet):
     queryset=RecursiveList.objects.all().order_by('id')
     serializer_class=RecursiveListSerializer

import io
import re
import json

@api_view(['GET','POST'])
def myrecursivelist(request):
       if(request.method == 'GET'):
          x=request.data
          print(x,type(x))
          models=RecursiveList.objects.filter(parent_list=None)
          python_native_data=RecursiveListSerializer(models,many=True)
          
          # jsonmydata=JSONRenderer().render(python_native_data.data)
          print(type(models),type(python_native_data),'\n\n',models,'\n\n',python_native_data,'\n\n',python_native_data.data)

          return Response({'msg':python_native_data.data})
       
       if(request.method == 'POST'):
            serializer=RecursiveListSerializer(data=request.data)
            if(serializer.is_valid()):
                 serializer.save()
                 return Response({'msg':'data saved'})
            return Response(serializer.errors)
 
def RecursiveListDocumentation(request):
          data=request.body
          stream=io.BytesIO(data)
          pythondata=JSONParser().parse(stream)
          x=pythondata.get('pattern')
          print(x)
          models=RecursiveList.objects.filter(listid__iregex=r'{}.*'.format(x))
          python_native_data=RecursiveListSerializer(models,many=True)
          # mydict=dict()
          # if(x in python_native_data.data):
          #      print('hii\n\n\n')
     

          # print(python_native_data,'\n \n',python_native_data.data)
          jsonmydata=JSONRenderer().render(python_native_data.data)
          y=json.loads(jsonmydata)
          # for i in y:
          #      if(i['parent_list'] is None):
          #       dict[i['listid']]=[]
          #       print(i,'\n\n')
          Mydict={}
          root_lists = RecursiveList.objects.filter(parent_list=None)

# Loop through root lists and retrieve their child lists
          for root_list in root_lists:
               #    print(f"Parent List: {root_list.name}")
                  child_lists = RecursiveList.objects.filter(parent_list=root_list)
                  Mydict[root_list]=child_lists
                  for child_list in child_lists:
                    #  print(f"\tChild List: {child_list.name}")
                     grand_child_lists = RecursiveList.objects.filter(parent_list=child_list)
                     Mydict[child_list]=grand_child_lists
                    #  for grand_child in grand_child_lists:
                    #       print(f"\t\tgrand Child List: {grand_child.name}")
                     
          for i in Mydict.items():
               print(i,'\n\n')
               


          # print(jsonmydata)

          return HttpResponse(jsonmydata,content_type='application/json')


@api_view(['GET'])
def recursive_list_api(request):
    if request.method == 'GET':
        # Query all root lists
        root_lists = RecursiveList.objects.filter(parent_list=None)
        
        # Organize data dictionary
        data = {}
        for root_list in root_lists:
            child_lists = RecursiveList.objects.filter(parent_list=root_list)
            data[root_list] = RecursiveListSerializer(child_lists, many=True).data
            for child_list in child_lists:
                    #  print(f"\tChild List: {child_list.name}")
                     grand_child_lists = RecursiveList.objects.filter(parent_list=child_list)
                     data[child_list] = RecursiveListSerializer(grand_child_lists, many=True).data
        
        # Return organized data dictionary
        return Response(data)


class messageModelViewSet(viewsets.ModelViewSet):
     queryset=Message.objects.all().order_by('-id')
     serializer_class=MessageSerializer

     def destroy(self, request,pk=None):
          model=Message.objects.get(id=pk)
          model.delete()
          return Response({'msg':'Deleted successfully'})
     


def index(request):
     x=TexttoVoiceModel.objects.get(title='audio2')
     print(x.audio_file)
     return render(request,'index.html',{'x':x.audio_file})

def receiveddata(request):
     # if request.method == 'POST':
     #    form = TexttoVoiceForm(request.POST, request.FILES)
     #    print(form.is_valid())
     # #    print(form)
     #    if form.is_valid():
     #     print('data saved')
     #     form.save()
         
     # else:
     #    print('data not saved')
     #    form = TexttoVoiceForm()
     # print('hellop0')
     # return render(request, 'index.html')
      if request.method == 'POST':
        audio_file = request.FILES.get('audio_file')  # Get the file from request.FILES
        title=request.POST.get('title')
        if audio_file:  # Check if a file was uploaded
            # Create an instance of TexttoVoiceModel and save the file
            text_to_voice_model = TexttoVoiceModel(title=title,audio_file=audio_file)
            text_to_voice_model.save()
            return render(request,'index.html',{'myfile':audio_file})
        else:
            return HttpResponse("No file uploaded.")
      else:
        return HttpResponse("Only POST requests are allowed.")

from gtts import gTTS
from io import BytesIO

# @api_view(['GET'])
# def voicechanger(request):
#   text='hello my name is rahul saini'
#   language = 'hi'
#   tts=gTTS(text=text,lang=language,slow=False)
# #   file_fp=BytesIO()
  
# #   tts.write_to_fp(file_fp)
# #   file_fp.seek(0)
  
#   f=open('myaudiofile.mp3','rb+')
#   file_fp=f.read()
 
# #   models=TexttoVoiceModel(title='myaudio',audio_file=data)
# #   models.save()
#   return Response({'myfile':file_fp}, content_type='audio/mpeg')
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
@csrf_exempt
def voicechanger(request):
    text=request.body
    stream=BytesIO(text)
    print(stream,type(stream))
    python_data=JSONParser().parse(stream)
    language = 'hi'
    text=python_data.get('text')
    tts=gTTS(text=text,lang=language,slow=False)
    file_fp=BytesIO()

    file_name = 'myaudio.mp3'
    
    tts.write_to_fp(file_fp)
    file_fp.seek(0)

    file_content=file_fp.read()
    file_path = default_storage.save(file_name, ContentFile(file_content))
    models = TexttoVoiceModel(title='myaudio', audio_file=file_path)
    models.save()

    return HttpResponse(file_fp, content_type='audio/mpeg') 


@csrf_exempt
def voicechanger1(request):
          #  title='myaudio'
          #  form=TexttoVoiceForm(title,request.FILES)
          #  if(form.is_valid()):
          #       form.save()
          #       return Response({'msg':'saved successfully'})
          #  else:
          #       return Response({'msg':'error'})
          return Response({'msg':'error'})



class texttovoiceModelViewSet(viewsets.ModelViewSet):
      queryset=TexttoVoiceModel.objects.all()
      serializer_class=TexttoVoiceSerializer

      def create(self, request, pk=None):
          #  form=TexttoVoiceForm()
           title='myaudio'
           form=TexttoVoiceForm(title,request.FILES)
           if(form.is_valid()):
                form.save()
                return Response({'msg':'saved successfully'})
           else:
                return Response({'msg':'error'})

     #  def list(self, request,pk=None):
     #      queryset=TexttoVoiceModel.objects.all()
     #      serializer=TexttoVoiceSerializer(queryset)
          
     #      x=request.data.get('text')
     #      myfile=voicechanger(x)
     #      # models=TexttoVoiceModel(title='myaudio',audio_file=myfile)
     #      # models.save()
     #      # querysets=TexttoVoiceModel.objects.get(title=)
     #      # serializer=TexttoVoiceSerializer(querysets,many=True)
          
     #      # y=request.GET.get('text')

     #      return Response({'msg':x,'msg2':serializer.data})


     #  def retrieve(self, request, pk=None):
     #      x=request.GET.get('text',default=None)
     #      Response({'msg':x})

     #  def get(self, request, pk=None):
     #       x=request.GET.get('text',default=None)
     #       Response({'msg':x})

def User(request):
     client_ip = request.META.get('HTTP_X_FORWARDED_FOR')
     
     if client_ip:
        # The X-Forwarded-For header can contain a comma-separated list of IP addresses
        # The actual client IP is usually the first one in the list
        client_ip = client_ip.split(',')[0].strip()
        print(client_ip)

    # If X-Forwarded-For header is not present or empty, fall back to REMOTE_ADDR
     if not client_ip:
        client_ip = request.META.get('REMOTE_ADDR')

    # If 'HTTP_X_FORWARDED_FOR' header is not present, fall back to 'REMOTE_ADDR'
     
     
     
     return HttpResponse(f'ip address:{client_ip}')
     


           