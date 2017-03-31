1. install middleman
2. bundle install (works with Ruby 2.3.3 for me)
3. npm install
4. install ImageMagick
5. middleman server

# Put coords.json
```shell
s3cmd -P --add-header='Cache-Control: no-cache, no-store, must-revalidate' --add-header "Pragma: no-cache" -P put coords.json s3://vonderwelt/coords.jsonXX
```

# CORS policy
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedOrigin>https://vonderwelt.ch</AllowedOrigin>
    <AllowedOrigin>http://localhost.localdomain:4567</AllowedOrigin>
    <AllowedOrigin>http://localhost:4567</AllowedOrigin>
    <AllowedOrigin>http://127.0.0.1:4567</AllowedOrigin>
    <AllowedHeader>*</AllowedHeader>
  </CORSRule>
</CORSConfiguration>
```
