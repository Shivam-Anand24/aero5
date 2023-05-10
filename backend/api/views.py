from django.shortcuts import render

from django.http import JsonResponse
from datetime import datetime

def data(request):
    try:
        # Replace this with your actual check to see if the backend is connected
        connected = True

        # Replace this with the actual message from your backend
        message = 'Hello, world!'

        data = {
            'connected': connected,
            'message': message,
            'last_ping': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        }

        return JsonResponse(data)
    except Exception as e:
        return JsonResponse({'error': str(e)})

