projectID=tekwrks
repo=quackup
name=website
version=1.0.0

build: .image-timestamp
	yarn build
	docker image build \
		-t ${repo}/${name}:${version} .

.image-timestamp: src/ public/ Dockerfile Makefile node_modules/ sw-precache-config.js package.json yarn.lock
	@touch .image-timestamp

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

.PHONY: push
push:
	set -ex;
	docker tag \
		${repo}/website:${version} \
		gcr.io/${projectID}/website:${version}
	docker push \
		gcr.io/${projectID}/website:${version}

