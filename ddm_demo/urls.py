from django.contrib.auth import views as auth_views
from django.urls import path
from ddm_demo.views import LandingPage


urlpatterns = [
    path('', LandingPage.as_view(), name='ddm-demo-landing'),
    path('auth/login/', auth_views.LoginView.as_view(template_name='myapp/login.html'), name='ddm-login'),
    path('auth/logout/', auth_views.LogoutView.as_view(), name='ddm-logout'),
]
