repo=quackup
name=website
version=1.0.0

.PHONY:build
build:
	yarn build && \
	docker image build \
		-t ${repo}/${name}:${version} .

.PHONY:run
run:
	docker container run \
		--rm \
		--name ${repo}-${name}-dev \
		--env-file .env \
		-p 7001:7001 \
		-t ${repo}/${name}:${version}

.PHONY:kill
kill:
	docker rm $$( \
	docker kill $$( \
	docker ps -aq \
	--filter="name=${repo}-${name}-dev" ))
