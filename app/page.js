'use client';

import { useState } from 'react';

const slides = [
  {
    title: "Brand Name",
    content: "AI For Everyday"
  },
  {
    title: "Brand Personality",
    content: "Smart, Modern, Helpful, Futuristic, Simple, Trustworthy"
  },
  {
    title: "Tone of Voice",
    content: "Clear, Simple, Educational, Trendy, Conversational, Action-focused"
  },
  {
    title: "Brand Purpose",
    content: "Educate people on how AI can simplify daily life, boost productivity, and make tasks easier."
  },
  {
    title: "Mission Statement",
    content: "To simplify AI for everyone and make technology a part of daily habits to improve life, productivity, and creativity."
  },
  {
    title: "Vision",
    content: "Become the most trusted source for practical AI hacks and daily automation."
  },
  {
    title: "Brand Values",
    content: "Simplicity, Utility, Innovation, Education, Honesty"
  },
  {
    title: "Primary Audience",
    content: "Students, Job Seekers, Content Creators, Entrepreneurs, Small Business Owners, Professionals"
  },
  {
    title: "Content Pillars",
    content: "AI Tools & Apps, Productivity Hacks, Career Growth, Content Creation Tips, Automation Guides"
  },
  {
    title: "Platform Strategy",
    content: "Instagram (Reels + Stories), YouTube (Shorts + Long Videos), TikTok, LinkedIn, Twitter/X"
  },
  {
    title: "Content Format",
    content: "Short Videos (Reels/Shorts), Carousels, Infographics, Quick Tips, Tutorials, Case Studies"
  },
  {
    title: "Posting Frequency",
    content: "Daily content across platforms with consistent scheduling"
  },
  {
    title: "Visual Identity",
    content: "Modern gradient backgrounds, Clean typography, Tech-inspired graphics, Consistent color palette"
  },
  {
    title: "Color Palette",
    content: "Primary: Deep Blue (#0A1628), Secondary: Electric Blue (#00D4FF), Accent: Purple (#7B2CBF), Neutral: White & Light Gray"
  },
  {
    title: "Typography",
    content: "Headlines: Bold, Sans-serif fonts, Body: Clean, readable fonts, Style: Modern and minimal"
  },
  {
    title: "Content Themes",
    content: "AI Tool of the Day, Productivity Boost Monday, Career Growth Wednesday, Weekend Automation Projects"
  },
  {
    title: "Engagement Strategy",
    content: "Respond to comments, Create polls and Q&A, Share user success stories, Host live sessions"
  },
  {
    title: "Growth Strategy",
    content: "SEO optimization, Collaboration with tech creators, Trending topic integration, Call-to-action in every post"
  },
  {
    title: "Key Metrics",
    content: "Engagement rate, Follower growth, Video views, Website traffic, Save/Share ratio"
  },
  {
    title: "Content Calendar",
    content: "Plan content weekly, Batch create content, Schedule posts in advance, Stay flexible for trends"
  },
  {
    title: "Monetization Plan",
    content: "Affiliate marketing, Sponsored content, Digital products, Online courses, Consulting services"
  },
  {
    title: "Community Building",
    content: "Create Discord/Telegram group, Share exclusive tips, Foster peer learning, Celebrate member wins"
  },
  {
    title: "Call to Action",
    content: "Follow for daily AI tips, Share this with someone who needs it, Tag us in your AI journey, Turn on notifications"
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.presentation}>
        <div style={styles.slide}>
          <h1 style={styles.title}>{slides[currentSlide].title}</h1>
          <div style={styles.content}>{slides[currentSlide].content}</div>
        </div>

        <div style={styles.controls}>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            style={{...styles.button, ...(currentSlide === 0 ? styles.buttonDisabled : {})}}
          >
            ← Previous
          </button>

          <div style={styles.slideCounter}>
            Slide {currentSlide + 1} of {slides.length}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            style={{...styles.button, ...(currentSlide === slides.length - 1 ? styles.buttonDisabled : {})}}
          >
            Next →
          </button>
        </div>

        <div style={styles.thumbnailContainer}>
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                ...styles.thumbnail,
                ...(index === currentSlide ? styles.thumbnailActive : {})
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0A1628 0%, #1a2642 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  presentation: {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  slide: {
    background: 'white',
    borderRadius: '16px',
    padding: '80px 60px',
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    color: '#0A1628',
    marginBottom: '40px',
    background: 'linear-gradient(135deg, #0A1628 0%, #00D4FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  content: {
    fontSize: '28px',
    lineHeight: '1.6',
    color: '#2d3748',
    maxWidth: '900px',
    fontWeight: '400'
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px'
  },
  button: {
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #00D4FF 0%, #7B2CBF 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0, 212, 255, 0.3)'
  },
  buttonDisabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none'
  },
  slideCounter: {
    color: 'white',
    fontSize: '18px',
    fontWeight: '500'
  },
  thumbnailContainer: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '10px'
  },
  thumbnail: {
    width: '40px',
    height: '40px',
    borderRadius: '6px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  thumbnailActive: {
    background: 'linear-gradient(135deg, #00D4FF 0%, #7B2CBF 100%)',
    borderColor: '#00D4FF',
    transform: 'scale(1.1)'
  }
};
