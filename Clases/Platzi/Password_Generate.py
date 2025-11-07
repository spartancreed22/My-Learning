### Password Generator with Security Checks
# Este script genera contraseñas seguras y verifica su fortaleza.
# Se asegura de que la contraseña cumpla con ciertos criterios de seguridad y evita el uso de palabras comunes o secuencias predecibles.
# Importamos las librerías necesarias
# Los comandos para instalar las librerías necesarias son:
# pip install random
# pip install string
# pip install re
# pip install secrets
# pip install hashlib
# pip install base64
# pip install cryptography
# pip install passlib
# pip install bcrypt
# pip install pycryptodome
# pip install pycryptography

# Con ChatGPT



import random
import string

# Lista de palabras comunes a evitar
palabras_comunes = {
    "password", "123456", "12345678", "qwerty", "abc123", "football", 
    "letmein", "monkey", "iloveyou", "admin", "welcome", "login"
}

# Caracteres especiales permitidos
caracteres_especiales = "!@#$%^&*()-_=+[]{}|;:,.<>?/"

def es_contrasena_segura(contrasena):
    # Reglas básicas
    if len(contrasena) < 12:
        return False
    if not any(c.islower() for c in contrasena):
        return False
    if not any(c.isupper() for c in contrasena):
        return False
    if not any(c.isdigit() for c in contrasena):
        return False
    if not any(c in caracteres_especiales for c in contrasena):
        return False
    
    # Evita palabras comunes y secuencias
    contrasena_lower = contrasena.lower()
    for palabra in palabras_comunes:
        if palabra in contrasena_lower:
            return False
    secuencias = ["123", "abc", "qwe", "asdf", "zxc", "password"]
    for seq in secuencias:
        if seq in contrasena_lower:
            return False
    return True

def generar_contrasena(longitud=12):
    if longitud < 12:
        raise ValueError("La contraseña debe tener al menos 12 caracteres.")

    while True:
        # Aseguramos al menos un caracter de cada tipo
        contrasena = [
            random.choice(string.ascii_uppercase),
            random.choice(string.ascii_lowercase),
            random.choice(string.digits),
            random.choice(caracteres_especiales)
        ]

        # Rellenamos el resto aleatoriamente
        caracteres_todos = string.ascii_letters + string.digits + caracteres_especiales
        contrasena += random.choices(caracteres_todos, k=longitud - 4)
        random.shuffle(contrasena)
        contrasena_str = ''.join(contrasena)

        if es_contrasena_segura(contrasena_str):
            return contrasena_str

# Ejemplo de uso
print("Contraseña generada:", generar_contrasena())
