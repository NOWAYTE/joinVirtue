import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pricingTiers = [
  {
    name: 'Basic',
    price: 'Free',
    frequency: '',
    features: [
      'Basic access',
      'Limited features',
      'Community support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    frequency: '/month',
    features: [
      'Full access',
      'Advanced features',
      'Priority support',
      'Custom branding',
    ],
    popular: true,
  },
];

export default function PricingSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Pricing Plans</h2>
          <p className="text-muted-foreground mt-2">
            Choose a plan that fits your needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`${tier.popular ? 'border-2 border-primary scale-105' : ''} transition-transform`}>
              <CardHeader>
                {tier.popular && (
                  <div className="text-sm font-medium text-primary mb-2">
                    Most Popular
                  </div>
                )}
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">
                    {tier.price}
                  </span>{' '}
                  <span className="text-base text-muted-foreground">
                    {tier.frequency}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {tier.features.map((feature) => (
                  <p key={feature} className="text-sm">
                    • {feature}
                  </p>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full hover:bg-primary/90">
                  {tier.name === 'Pro' ? 'Join now →' : 'Get Started →'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}