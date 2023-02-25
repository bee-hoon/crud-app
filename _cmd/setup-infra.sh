cd _infrastructure

while getopts t: flag
do
  case "${flag}" in
  	t) exec_type=${OPTARG};;
  esac
done

if [ $exec_type = 'up' ]
then
  docker-compose up -d
else
  docker-compose down
fi
