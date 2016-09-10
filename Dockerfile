FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD target/*.war app.war
EXPOSE 8080
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.war"]
