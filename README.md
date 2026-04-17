# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [AWS CDK](https://aws.amazon.com/cdk/) as an Infrastructure as Code tool
- [Serverless](https://serverless.com/) as a serverless framework
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Deployment URLs

### CloudFront Distribution (Production)

**URL:** https://d1jjx4z4ue4xfc.cloudfront.net

The application is deployed using AWS CDK and served through CloudFront CDN with:

- S3 bucket as origin (private, access via CloudFront only)
- Automatic cache invalidation on deployment
- HTTPS redirect enabled
- SPA routing support (403/404 errors redirect to index.html)

### S3 Bucket

The S3 bucket is configured with `BlockPublicAccess` enabled and is only accessible through the CloudFront distribution. Direct S3 website access will show **403 Access Denied** error (as intended for security).

## Infrastructure

The application infrastructure is managed with **AWS CDK** (TypeScript):

- **S3 Bucket**: Private bucket for storing static assets
- **CloudFront Distribution**: CDN for serving the application globally
- **Origin Access Control**: Secure access from CloudFront to S3
- **Automatic Deployment**: Uploads build artifacts and invalidates cache

### CDK Structure

```
infra/
├── bin/
│   └── infra.ts           # CDK app entry point
├── lib/
│   ├── deploy-web-app-stack.ts    # Main stack definition
│   └── deployment-service.ts      # S3 + CloudFront construct
└── cdk.json               # CDK configuration
```

## Available Scripts

### Development

#### `npm start`

Starts the project in dev mode with mocked API on local environment.

#### `npm run build`

Builds the project for production in `dist` folder.

#### `npm run preview`

Starts the project in production mode on local environment.

### Testing

#### `npm test`, `npm run test:ui`, `npm run test:coverage`

Runs tests in console, in browser or with coverage.

### Code Quality

#### `npm run lint`, `npm run prettier`

Runs linting and formatting for all files in `src` folder.

### AWS CDK Deployment (Recommended)

#### `npm run cdk:deploy`

**Complete automated deployment:**

1. Builds the React application
2. Deploys to AWS (S3 + CloudFront)
3. Automatically invalidates CloudFront cache

**Prerequisites:**

- AWS CLI configured with valid credentials
- AWS CDK bootstrapped in your account: `cd infra && npx cdk bootstrap`

#### `npm run cdk:synth`

Synthesizes the CloudFormation template (useful for reviewing changes).

#### `npm run cdk:diff`

Shows the difference between deployed stack and current code.

#### `npm run cdk:destroy`

Removes all AWS resources created by CDK.

### Serverless Framework Deployment (Legacy)

#### `npm run client:deploy`, `npm run client:deploy:nc`

Deploy the project build from `dist` folder to configured in `serverless.yml` AWS S3 bucket with or without confirmation.

#### `npm run client:build:deploy`, `npm run client:build:deploy:nc`

Combination of `build` and `client:deploy` commands with or without confirmation.

#### `npm run cloudfront:setup`

#### `npm run cloudfront:setup`

Deploy configured in `serverless.yml` stack via CloudFormation.

#### `npm run cloudfront:domainInfo`

Display cloudfront domain information in console.

#### `npm run cloudfront:invalidateCache`

Invalidate cloudfront cache.

#### `npm run cloudfront:build:deploy`, `npm run cloudfront:build:deploy:nc`

Combination of `client:build:deploy` and `cloudfront:invalidateCache` commands with or without confirmation.

#### `npm run cloudfront:update:build:deploy`, `npm run cloudfront:update:build:deploy:nc`

Combination of `cloudfront:setup` and `cloudfront:build:deploy` commands with or without confirmation.

#### `npm run serverless:remove`

Remove an entire stack configured in `serverless.yml` via CloudFormation.

## Task Completion Notes

### Task 2: AWS Deployment

✅ **Completed Requirements:**

- S3 bucket created with proper security (private, no public access)
- CloudFront distribution configured and serving the application
- SPA routing properly configured (403/404 errors handled)
- AWS CDK infrastructure as code implemented
- Automated build and deployment via npm scripts
- Automatic CloudFront cache invalidation

### Architecture

```
User Request
     ↓
CloudFront Distribution (HTTPS)
     ↓
S3 Bucket (Private)
     ↓
React SPA (index.html)
```

**Security Features:**

- S3 bucket blocked from public access
- Access only via CloudFront with Origin Access Control
- HTTPS enforced (HTTP redirects to HTTPS)
- Proper error handling for SPA routes

## Repository Information

**Branch:** `task-2`
**Base branch:** `master`

All deployment infrastructure changes are committed to the `task-2` branch and submitted via Pull Request for review.
