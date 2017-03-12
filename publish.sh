s3cmd -r --exclude="*small*" --exclude="*large*" put source/blog/ s3://vonderwelt-source
s3cmd -r -P --exclude=".git" put build/ s3://vonderwelt
