from django.core.exceptions import ValidationError
from django.forms import ModelForm

from articles.models import Comment


class CommentBaseForm(ModelForm):
    class Meta:
        model = Comment
        fields = '__all__'


class CommentCreateForm(CommentBaseForm):
    class Meta(CommentBaseForm.Meta):
        exclude = ['status']

    def clean(self):
        super(CommentCreateForm, self).clean()

    def save(self, commit=True):
        instance = super(CommentCreateForm, self).save(commit=False)
        if self.data.get('parent_id', False):
            instance.parent = Comment.objects.get(id=self.data['parent_id'])
        if commit:
            instance.save()
        return instance
