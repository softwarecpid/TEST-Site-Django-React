from django.urls import path
from .views import (
    register_view,
    login_view,
    logout_view,
    user_view,
    update_user_view
)

urlpatterns = [
    path('Register', register_view, name="Register"),
    path('Login', login_view, name="Login"),
    path('Logout', logout_view, name="Logout"),
    path('Info', user_view, name="Info"),
    path('Edit', update_user_view, name="Edit"),
]