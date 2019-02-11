project=tekwrks
name=website

all: Makefile .image-timestamp
	@touch .image-timestamp

build: src/ node_modules/ sw-precache-config.js package.json yarn.lock
	yarn build

.image-timestamp: build Dockerfile public/
	docker image build \
		-t ${project}/${name}:latest .

.PHONY:run
run:
	docker container run \
		--rm \
		--name ${project}-${name}-dev \
		--env-file .env \
		-p 7001:7001 \
		-t ${project}/${name}:latest

.PHONY:kill
kill:
	docker kill $$( \
		docker ps -aq \
			--filter="name=${project}-${name}-dev" )

