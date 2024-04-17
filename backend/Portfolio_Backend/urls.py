"""
URL configuration for Portfolio_Backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings


router=DefaultRouter()
router.register('myprojects',views.projectsModelViewSet,basename='myprojects')
router.register('message',views.messageModelViewSet,basename='message')
router.register('myexperience',views.experienceModelViewSet,basename='myexperience')
router.register('skills',views.skillsModelViewSet,basename='skills')
router.register('texttovoice',views.texttovoiceModelViewSet,basename='texttovoice')
# router.register('itemdocumentation',views.ItemDocumentationModelViewSet,basename='itemdocumentation')
router.register('listdocumentation',views.RecursivelistDocumentationModelViewSet,basename='listdocumentation')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('index',views.index,name='index'),
    path('user',views.User,name='user'),
    path('voicechanger',views.voicechanger,name='voicechanger'),
    path('voicechanger1',views.voicechanger1,name='voicechanger1'),
    path('receiveddata',views.receiveddata,name='index'),
    path('myrecursivelist',views.myrecursivelist,name='myrecursivelist'),
    path('recursive-list-api',views.recursive_list_api,name='recursive-list-api'),
    path('recursivelist',views.RecursiveListDocumentation,name='recursivelist'),
    # path('skills',views.skills)
    path('',include(router.urls)),
    path('auth/',include('rest_framework.urls',namespace='rest_framework'))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)