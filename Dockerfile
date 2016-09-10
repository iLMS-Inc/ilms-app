FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD target/*.war app.war
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.war"]
