#!/bin/bash
export MAGICK_OCL_DEVICE=OFF
find . -name "*_large.jpg" -or -name "*_medium.jpg" -or -name "*_small.jpg" |xargs rm
for i in $(find . -iname "*jpg"); do
  n=$(echo "$i"|sed 's/\.\([a-zA-Z]*\)$/_large.\1/i')
  convert "$i" -auto-orient -resize 1920x1200 "$n" &
  n=$(echo "$i"|sed 's/\.\([a-zA-Z]*\)$/_small.\1/i')
  convert "$i" -auto-orient -resize 400x400 "$n" &
  if [[ "$i" == *"main.jpg" ]]; then
    n=$(echo "$i"|sed 's/\.\([a-zA-Z]*\)$/_medium.\1/i')
    convert "$i" -auto-orient -resize 800x800 "$n" &
  fi
  wait
done
