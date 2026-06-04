# Proof of Concept (POC): Mutation Testing

This project is a Proof of Concept (POC) to demonstrate the value of **Mutation Testing** and how it can help improve the quality of an existing test suite.

## What is a Proof of Concept (POC)?

A Proof of Concept is a small project or experiment designed to test a concept or theory. The main goal is to verify that an idea is viable and has practical potential. In this case, the POC shows how mutation testing can be integrated into a project and what benefits it provides.

## What is Mutation Testing?

Mutation testing is a technique used to evaluate the quality of software tests. It works by making small, deliberate changes (or "mutations") to your source code. For each mutation, the tests are run again.

- If the tests **fail**, the mutant is considered "killed." This is good! It means your tests were able to detect the change.
- If the tests **pass**, the mutant "survives." This indicates a potential weakness in your test suite, as it failed to detect a code change.

## Why is Mutation Testing useful?

The main goal of mutation testing is to help you write better tests. A high mutation score indicates that your tests are robust and can detect a wide variety of faults.

- **Identifies Test Weaknesses**: It reveals edge cases and scenarios that your tests are not covering, even if you have high code coverage (e.g., 100%).
- **Improves Code Quality**: By forcing you to write more thorough tests, it indirectly improves the quality and reliability of your code.
- **Complements Code Coverage**: While code coverage tells you which lines of code are executed by your tests, mutation testing tells you *how well* they are tested.

## Project Scripts

This project includes the following scripts:

### Development

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

To build the application for production:

```bash
pnpm build
```

### Start

To start a production server:

```bash
pnpm start
```

### Linting

To lint the code:

```bash
pnpm lint
```

### Testing

To run the test suite:

```bash
pnpm test
```

To run the tests and generate a coverage report:

```bash
pnpm test:coverage
```

### Mutation Testing

To run mutation testing:

```bash
pnpm mutation
```