#!/bin/fish

rm -r source/blog/**/.comments/

rvm
middleman build

s3cmd -r -P --exclude=".git/*" --no-preserve --add-header='Cache-Control:max-age=31536000, public' sync build/ s3://vonderwelt

bundle exec rake publish
#s3cmd -r --exclude="*small*" --exclude="*large*" sync source/blog/ s3://vonderwelt-source
