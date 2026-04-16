import json
from django.http import JsonResponse
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from .models import Inquiry


@csrf_exempt
def send_inquiry(request):

    if request.method == "POST":

        data = json.loads(request.body)

        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone")
        message = data.get("message")

        Inquiry.objects.create(
            name=name,
            email=email,
            phone=phone,
            message=message
        )

        send_mail(
            "New Inquiry - Pratika Polycap",
            f"Name: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {message}",
            "akhileshnagar1985@gmail.com",
            ["akhileshnagar1985@gmail.com"],
        )

        return JsonResponse({"status": "success"})

    return JsonResponse({"error": "POST request required"})