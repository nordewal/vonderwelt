s3cmd -r --exclude="*small*" --exclude="*large*" put source/blog/ s3://vonderwelt-source
s3cmd -r -P --exclude=".git" --add-header='Cache-Control:max-age=31536000, public' --add-header="Expires:`date -u +"%a, %d %b %Y %H:%M:%S GMT" --date "next Year"`" put build/ s3://vonderwelt
