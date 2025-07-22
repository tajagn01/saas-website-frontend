import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const PricingSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'For Small Teams',
      monthlyPrice: 29,
      annualPrice: 290,
      description: 'Perfect for small teams just getting started with data transformation',
      popular: false,
      gradient: 'linear-gradient(135deg, #ff6b2c 0%, #ff8f5a 100%)',
      icon: '🚀',
      features: [
        'Up to 5 team members',
        '10GB data processing',
        'Basic analytics dashboard',
        'Email support',
        '5 custom reports',
        'API access'
      ],
      limits: ['Limited integrations', 'Standard support only']
    },
    {
      id: 'pro',
      name: 'Professional',
      subtitle: 'Most Popular Choice',
      monthlyPrice: 79,
      annualPrice: 790,
      description: 'Advanced features for growing businesses that need powerful analytics',
      popular: true,
      gradient: 'linear-gradient(135deg, #ff6b2c 0%, #ff8f5a 100%)',
      icon: '⚡',
      features: [
        'Up to 25 team members',
        'Unlimited data processing',
        'Advanced AI insights',
        'Priority support',
        'Unlimited custom reports',
        'Full API access',
        'Real-time collaboration',
        'Advanced security'
      ],
      limits: []
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'For Large Organizations',
      monthlyPrice: 199,
      annualPrice: 1990,
      description: 'Complete solution for enterprises with advanced requirements',
      popular: false,
      gradient: 'linear-gradient(135deg, #ff6b2c 0%, #ff8f5a 100%)',
      icon: '🏢',
      features: [
        'Unlimited team members',
        'Unlimited everything',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced compliance',
        'On-premise deployment',
        'Training & onboarding'
      ],
      limits: []
    }
  ];

  useEffect(() => {
    if (!headerRef.current || cardsRef.current.some(el => el === null)) return;

    const validCards = cardsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 60 });
      gsap.set('.toggle-container', { opacity: 0, scale: 0.8 });
      gsap.set(validCards, { opacity: 0, y: 100, rotationY: 15 });

      const tl = gsap.timeline();

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
        .to('.toggle-container', {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)"
        }, "-=0.6")
       .to(validCards, {
  opacity: 1,
  y: 0,
  rotationY: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
}, "-=0.4");
      gsap.to('.particle', {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
      });

      gsap.to('.particle', {
        y: gsap.utils.random(-50, 50),
        x: gsap.utils.random(-30, 30),
        duration: gsap.utils.random(4, 8),
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);

    const selectedCard = cardsRef.current.find(card =>
      card && card.getAttribute('data-plan') === planId
    );

    if (selectedCard) {
      gsap.to(selectedCard, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      });
    }
  };

  const toggleBilling = () => {
    gsap.to('.price-amount', {
      scale: 0.8,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setIsAnnual(prev => !prev);
        gsap.to('.price-amount', {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      }
    });
  };

  return (
    <div ref={sectionRef} style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      background: '#000',
      color: '#ffffff',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            position: 'absolute',
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            background: `linear-gradient(45deg, #ff6b2c, #667eea, #38ef7d)`,
            borderRadius: '50%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.6,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      ))}

      <section style={{
        padding: '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
            background: 'rgba(255, 107, 44, 0.1)',
            border: '1px solid rgba(255, 107, 44, 0.3)',
            borderRadius: '50px',
            marginBottom: '24px',
            fontSize: '0.9rem',
            color: '#ff6b2c'
          }}>
            🎯 Choose Your Plan
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #ff6b2c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Flexible Pricing for Every Business
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#a0a0a0',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}>
            Scale your data transformation journey with plans designed for teams of all sizes
          </p>

          <div className="toggle-container" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '8px',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{
              color: !isAnnual ? '#fff' : '#888',
              fontSize: '0.9rem',
              fontWeight: 500
            }}>Monthly</span>

            <div
              onClick={toggleBilling}
              style={{
                width: '50px',
                height: '26px',
                background: isAnnual ? '#ff6b2c' : 'rgba(255, 255, 255, 0.2)',
                borderRadius: '13px',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                background: '#fff',
                borderRadius: '50%',
                position: 'absolute',
                top: '3px',
                left: isAnnual ? '27px' : '3px',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }} />
            </div>

            <span style={{
              color: isAnnual ? '#fff' : '#888',
              fontSize: '0.9rem',
              fontWeight: 500
            }}>
              Annual
              <span style={{
                background: '#ff6b2c',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.7rem',
                marginLeft: '8px'
              }}>Save 20%</span>
            </span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}>
          {pricingPlans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                ref={el => cardsRef.current[index] = el}
                data-plan={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: plan.popular
                    ? '2px solid #ff6b2c'
                    : isSelected
                      ? '2px solid rgba(255, 107, 44, 0.5)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '32px 24px',
                  cursor: 'pointer',
                  boxShadow: isSelected
                    ? '0 12px 24px rgba(255, 107, 44, 0.3)'
                    : '0 8px 16px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.4s ease',
                  position: 'relative'
                }}
              >
                {/* Card Content */}
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                    {plan.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    background: plan.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {plan.name}
                  </h3>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div className="price-amount" style={{
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    background: plan.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1
                  }}>
                    ${price}
                  </div>
                  <div style={{
                    color: '#aaa',
                    fontSize: '1rem',
                    marginTop: '4px'
                  }}>
                    per {isAnnual ? 'year' : 'month'}
                    {isAnnual && (
                      <span style={{
                        color: '#4ade80',
                        fontSize: '0.8rem',
                        marginLeft: '8px'
                      }}>
                        (Save ${(plan.monthlyPrice * 12) - plan.annualPrice})
                      </span>
                    )}
                  </div>
                </div>

                <p style={{
                  color: '#ccc',
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  marginBottom: '32px',
                  lineHeight: 1.5
                }}>
                  {plan.description}
                </p>

                <button
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    marginBottom: '32px',
                    background: plan.gradient,
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
