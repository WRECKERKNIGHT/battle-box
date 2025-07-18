# BattleBOX - Gaming Café & Store Platform

## Overview

BattleBOX is a full-stack web application for a gaming café and store in Patna, India. The platform combines a React frontend with an Express.js backend to provide comprehensive gaming services including café booking, XP profile system, merchandise store, tournaments, and customer contact management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with separate client and server directories, utilizing a modern TypeScript-based stack with PostgreSQL database integration via Drizzle ORM.

### Architecture Decisions

**Problem**: Need for a scalable gaming café management system
**Solution**: Full-stack TypeScript application with shared schema validation
**Rationale**: Type safety across frontend and backend, shared validation logic, modern developer experience

**Problem**: Database management and migrations
**Solution**: Drizzle ORM with PostgreSQL and Neon serverless database
**Rationale**: Type-safe database operations, excellent TypeScript integration, serverless scalability

**Problem**: UI consistency and rapid development
**Solution**: Shadcn/ui components with Tailwind CSS and custom gaming theme
**Rationale**: Pre-built accessible components, consistent design system, gaming-focused styling

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state, React hooks for local state
- **Styling**: Tailwind CSS with custom gaming theme variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Build Tool**: Vite with custom development setup

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas shared between client and server
- **Storage**: Abstracted storage interface with in-memory fallback
- **Development**: Custom Vite integration for SSR development

### Database Schema
- **Users**: Profile management with XP levels and playtime tracking
- **Products**: Store inventory with categories and pricing
- **Bookings**: Gaming session reservations with platform selection
- **Tournaments**: Competitive events with participation tracking
- **Contacts**: Customer inquiries and support requests

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle validation and business logic
3. **Data Access**: Storage abstraction layer manages database operations
4. **Database**: Drizzle ORM executes type-safe SQL queries
5. **Response**: JSON data flows back through the same path

### Key Data Patterns
- Form validation using React Hook Form with Zod resolvers
- Optimistic updates for better user experience
- Error handling with toast notifications
- Real-time data with polling strategies

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **wouter**: Lightweight React routing

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **drizzle-kit**: Database migration management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static files
2. **Backend Build**: ESBuild bundles Express server for Node.js
3. **Database**: Drizzle migrations run against PostgreSQL
4. **Assets**: Static files served from dist/public directory

### Production Configuration
- Environment variables for database connection
- Neon serverless PostgreSQL for production database
- Express serves both API routes and static frontend
- CORS and security middleware for production deployment

### Development Setup
- Hot module replacement with Vite
- Automatic TypeScript compilation
- Database development with local or remote PostgreSQL
- Shared TypeScript configuration for consistent builds

### Scalability Considerations
- Serverless database connection pooling
- Stateless API design for horizontal scaling
- CDN-ready static asset structure
- Environment-based configuration management