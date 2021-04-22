from django.contrib import admin
from .models import Account


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_filter = ('is_sidi', 'is_staff', 'is_superuser',)
    search_fields = ('suser_id',)
