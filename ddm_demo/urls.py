from django.contrib.auth import views as auth_views
from django.urls import path
from ddm_demo.views import LandingPage

from allauth.account.views import SignupView

urlpatterns = [
    path('', LandingPage.as_view(), name='ddm-demo-landing'),
    path('auth/login/', auth_views.LoginView.as_view(template_name='ddm_demo/login.html'), name='account_login'),
    path('auth/logout/', auth_views.LogoutView.as_view(), name='account_logout'),
    path('auth/register/', SignupView.as_view(), name='account_signup'),
]
