# Playwright Test Automation Framework

A scalable, maintainable end-to-end test automation framework built with **Playwright** and **TestScript**, following the **Page Object Model (POM)** design pattern. Built to support data-driven testing, custom reporting, and CI/CD integration for real-world QA workflows.

## Key Features

- **Page Object Model (POM)** — clean separation between test logic and UI locators for easy maintenance
- **csv-parse/sync** — data-driven testing support, reading test data directly from csv sheets
- **ReportSteps Wrapper** — a `test.step()` wrapper for structured, readable step-by-step reporting
- **Winston Logging** — centralized logging for debugging and traceability across test runs -Yet to add
- **Custom HTML Reporting** — enhanced, readable test reports beyond the default Playwright reporter
- **CI/CD Integration** — automated test execution via GitHub Actions on every push/PR

## Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright | Browser automation & test runner |
| JavaScript | Core language |
| Winston | Logging |
| CSV | Test data management |
| GitHub Actions | CI/CD pipeline |

## Project Structure

```
├── .github/workflows/       # CI/CD pipeline configs
├── pages/                   # Page Object classes
├── tests/                   # Test specs
├── fixtures/                # Custom Playwright fixtures
├── utils/
│   ├── ExcelUtils.js        # Excel data handling
│   ├── ReportSteps.js       # test.step() wrapper
│   └── logger.js            # Winston logger config
├── test-data/                # Excel/JSON test data files
├── reports/                  # Generated HTML reports
├── playwright.config.js
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
git clone <repo-url>
cd <repo-name>
npm install
npx playwright install
```

### Running Tests
```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/AccountRegistration.spec.ts

# Run in headed mode
npx playwright test --headed

# Run with debug logs
npx playwright test --debug
```

### Viewing Reports
```bash
npx playwright show-report
```
Custom HTML reports are also generated under `/reports`.

## CI/CD

Tests run automatically via **GitHub Actions** on every push and pull request. Pipeline config: `.github/workflows/playwright.yml`.

## Data-Driven Testing

Test data is managed via `ExcelUtils.js`, allowing tests to pull input values directly from Excel sheets in `/test-data`, making it easy to scale test coverage without touching test logic.

## Author

**Shereena MS**
Senior QA Automation Engineer | Playwright | Selenium | BFSI Domain
[LinkedIn] · [GitHub]
