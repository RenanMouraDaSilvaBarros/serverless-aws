# Serverless

Application using serverless, DynamoDB, S3, lambda function, aws.

## AWS Config Credentials

- serverless config credentials --provider provider --key key --secret secret
  - provider or -p The provider (in this case aws). Required.
  - key or -k The aws_access_key_id. Required.
  - secret or -s The aws_secret_access_key. Required.
  - profile or -n The name of the profile which should be created.
  - overwrite or -o Overwrite the profile if it exists.

## Create Project

- serverless create --template aws-nodejs --path ./

## Path

- npm i -D serverless-functions-base-path

## Deploy

- serverless deploy

## Call function

- serverless invoke -f  ***(name function)***  -l

## Delete

- serverless remove
