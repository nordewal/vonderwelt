#!/bin/fish
find . -name "*_large.jpg" -or -name "*_small.jpg" |xargs rm
for i in (find . -iname "*jpg")
    set n (echo $i|sed 's/\.\([a-zA-Z]*\)$/_large.\1/i')
    convert $i -auto-orient -resize 1920x1200 {$n} &
    set n (echo $i|sed 's/\.\([a-zA-Z]*\)$/_small.\1/i')
    convert $i -auto-orient -resize 400x400 {$n} &
end
