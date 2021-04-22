from django.contrib import admin
from .models import Account


@admin.register(Account)
class AccountAdmin(admin.ModelAdmin):
    list_filter = ('is_sidi')
    search_fields = ('suser_id',)
