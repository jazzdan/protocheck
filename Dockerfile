FROM node:lts

COPY . .

RUN yarn

ENTRYPOINT ["node", "/entrypoint.js"]

LABEL maintainer="Dan Miller <dan@dmiller.dev>"
LABEL com.github.actions.name="Proto Changes Must Be In Own PR"
LABEL com.github.actions.description="Enforce that protobuf changes must be in their own separate PR in order to help with backwards compatibility"
LABEL com.github.actions.icon=file
LABEL com.github.actions.color=gray-dark
