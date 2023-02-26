setup-infrastructure-up:
	docker-compose -f ./_infrastructure/docker-compose.yml up -d

setup-infrastructure-down:
	docker-compose -f ./_infrastructure/docker-compose.yml down

server-up:
	docker-compose -f ./server/docker-compose.yml up -d

server-down:
	docker-compose -f ./server/docker-compose.yml down

compile:
	docker exec -it node_docker_instance npm run typescript
