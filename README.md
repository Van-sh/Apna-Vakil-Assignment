# Apna Vakil Assignment

## Objective

The goal of this assignment is to build a ReactJS application that utilizes the Context API and the useContext hook for state management. The application will also involve fetching data from an API, storing the data in Context, and managing global state efficiently.

## Approach

1. **Context API and useContext Hook**:
   - Created a `DataContext` using `createContext` to hold the global state.
   - Used `useContext` to access the context in various components.

2. **State Management**:
   - Defined the initial state and actions for the context.
   - Used `useReducer` to manage state transitions based on dispatched actions.

3. **Fetching Data**:
   - Implemented a `fetchPosts` function to fetch data from an API.
   - Stored the fetched data in the context state.

4. **Components**:
   - Created components like `Posts`, `Post`, `Loader`, and `ErrorScreen` to display data and handle different states (loading, error).

5. **Global State Management**:
   - Managed global state efficiently by using context and reducer to handle actions like fetching posts, setting loading state, and deleting posts.

## Installation

### Prerequisites

- Node.js (version >= 18)
- npm or yarn package manager

### Clone the repo and install dependencies

```sh
git clone https://github.com/Van-sh/Apna-Vakil-Assignment.git
cd Apna-Vakil-Assignment
```

```sh
pnpm i
```

### Start the Development Server

```sh
pnpm dev
```

### Build for Production

```sh
pnpm build
```

### Locally Preview the Production Build

```sh
pnpm preview
```
