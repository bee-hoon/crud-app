server-up:
	docker-compose -f ./server/docker-compose.yml up -d

server-down:
	docker-compose -f ./server/docker-compose.yml down

compile:
	docker exec -it node_docker_instance npm run typescript
