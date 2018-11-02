# AWS TODOS CLIENT

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## AWS

To deploy the project under AWS, install the [awscli](https://aws.amazon.com/cli/?sc_channel=PS&sc_campaign=acquisition_IT&sc_publisher=google&sc_medium=english_command_line_b&sc_content=aws_cli_e&sc_detail=aws%20cli&sc_category=command_line&sc_segment=162172401058&sc_matchtype=e&sc_country=IT&s_kwcid=AL!4422!3!162172401058!e!!g!!aws%20cli&ef_id=CjwKCAjw6-_eBRBXEiwA-5zHaSR27hiqlA0LGDL91kpT2F11YJt9T9ZEzKtYqhqtVxEczOXsp6yk1RoC_AcQAvD_BwE:G:s)


Then configure it :

```
awscli configure
```
Take the information from the AWS console > IAM

Create a bucket :

```
aws s3 mb s3://todo-app-test-softphone
```

## DEPLOY

Build the app :

```
ng build --prod
```

Deploy on S3 with public read permission:
```
aws s3 sync todo-app s3://todo-app-test-softphone --acl public-read
```

