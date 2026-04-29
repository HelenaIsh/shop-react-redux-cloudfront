import { Construct } from "constructs";
import {
  aws_cloudfront,
  aws_s3,
  aws_s3_deployment,
  CfnOutput,
} from "aws-cdk-lib";

const path = "../dist";

export class DeploymentService extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const hostingBucket = aws_s3.Bucket.fromBucketName(
      this,
      "FrontendBucket",
      "deploywebappstack-deploymentfrontendbucket67ceb713-ojkquh3fr41s",
    );

    const distribution = aws_cloudfront.Distribution.fromDistributionAttributes(
      this,
      "CloudfrontDistribution",
      {
        distributionId: "E3TYCBHV70BDZR",
        domainName: "di3bvpq1652st.cloudfront.net",
      },
    );

    new aws_s3_deployment.BucketDeployment(this, "BucketDeployment", {
      sources: [aws_s3_deployment.Source.asset(path)],
      destinationBucket: hostingBucket,
      distribution,
      distributionPaths: ["/*"],
    });

    new CfnOutput(this, "CloudFrontURL", {
      value: distribution.distributionDomainName,
      description: "The distribution URL",
      exportName: "CloudfrontURL",
    });
  }
}
