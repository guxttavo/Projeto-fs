from rest_framework import serializers
from ..models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # especifica os filds que aparecerão na API
        fields = ('id', 'name', 'course', 'email', 'cpf', 'password')
        # fields = ('id', 'name', 'course', 'email', 'cpf', 'password',
        #           'password2')  # Acrescido o campo de confirmação de senha

    # Função para encriptar a senha enviada pela API e para confirmação de senha
    def create(self, validated_data):
        user = User(**validated_data)
        # if(user.password == user.password2):
        user.set_password(validated_data['password'])
        # user.password2 = user.password
        user.save()
        return user
        # raise serializers.ValidationError("Those passwords don't match.")


# ctrl + ;  Comenta linha inteira
