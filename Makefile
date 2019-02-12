project=tekwrks
name=website

.PHONY:build
build:
	yarn build
	docker image build \
		-t ${project}/${name}:latest \
		.

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

