"""
Tests for models
"""

from decimal import Decimal
from core import models
from django.test import TestCase
from django.contrib.auth import get_user_model


def create_sample_user(email="user@example.com", password="test123"):
    return get_user_model().objects.create_user(email, password)


class ModelTests(TestCase):
    def test_create_user_with_email_successfully(self):
        email = "test@example.com"
        password = "123456"
        user = get_user_model().objects.create_user(
            email=email,
            password=password,
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_new_user_email_normalized(self):
        sample_emails = [
            ["test1@EXAMPLE.com", "test1@example.com"],
            ["Test2@Example.com", "Test2@example.com"],
            ["TEST3@EXAMPLE.com", "TEST3@example.com"],
            ["test4@example.COM", "test4@example.com"],
        ]
        for email, expected in sample_emails:
            user = get_user_model().objects.create_user(email, "sample123")
            self.assertEqual(user.email, expected)

    def test_new_user_without_email_raises_error(self):
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user("", "test123")

    def test_create_superuser(self):
        user = get_user_model().objects.create_superuser(
            "test@example.com",
            "test123",
        )

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)

    def test_create_recipe(self):
        """Test creating a new recipe"""
        user = get_user_model().objects.create_user(
            "test@example.com",
            "test123",
        )
        recipe = models.Recipe.objects.create(
            user=user,
            title="Steak and mushroom sauce",
            time_minutes=5,
            price=Decimal("5.00"),
            description="This is a test description",
        )
        self.assertEqual(str(recipe), recipe.title)

    def test_create_tag(self):
        """Test creating a new tag"""
        tag = models.Tag.objects.create(
            user=create_sample_user(),
            name="Vegan",
        )
        self.assertEqual(str(tag), tag.name)

    def test_create_ingredient(self):
        """Test creating a new ingredient"""
        ingredient = models.Ingredient.objects.create(
            user=create_sample_user(),
            name="Cucumber",
        )
        self.assertEqual(str(ingredient), ingredient.name)
