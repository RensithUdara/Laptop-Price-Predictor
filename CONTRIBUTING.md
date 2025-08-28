# Contributing to Laptop Price Predictor

First off, thank you for considering contributing to the Laptop Price Predictor! It's people like you that make this project a great tool for everyone. 🎉

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [project-email@example.com].

### Our Pledge

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Acknowledge different viewpoints and experiences
- Show empathy towards other community members

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- Python 3.8 or higher installed
- Git for version control
- A GitHub account
- Basic knowledge of Flask, scikit-learn, or web development

### First Contribution

If this is your first contribution to open source:
1. Read this contributing guide carefully
2. Look for issues labeled `good first issue` or `help wanted`
3. Don't hesitate to ask questions in the issue comments
4. Start with small changes to get familiar with the codebase

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please:
1. **Check existing issues** - the bug may already be reported
2. **Test with the latest version** - the bug might already be fixed
3. **Provide detailed information** - follow our bug report template

#### Bug Report Template
```markdown
**Bug Description**
A clear and concise description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment**
- OS: [e.g., Windows 10, macOS 12, Ubuntu 20.04]
- Browser: [e.g., Chrome, Firefox, Safari]
- Python Version: [e.g., 3.9.7]
- Project Version: [e.g., v1.2.0]

**Additional Context**
Any other context about the problem.
```

### ✨ Suggesting Enhancements

Enhancement suggestions are welcome! Please:
1. Check if the enhancement is already suggested
2. Provide a clear use case
3. Explain why this enhancement would be useful
4. Consider the project scope and goals

#### Enhancement Request Template
```markdown
**Enhancement Description**
A clear and concise description of the enhancement.

**Problem Statement**
What problem does this enhancement solve?

**Proposed Solution**
How would you like this enhancement to work?

**Alternative Solutions**
Other solutions you've considered.

**Additional Context**
Screenshots, mockups, or examples.
```

### 💻 Code Contributions

We welcome code contributions! Here are areas where you can help:

#### Frontend Improvements
- UI/UX enhancements
- Responsive design improvements
- Accessibility features
- Browser compatibility
- Performance optimizations

#### Backend Development
- API improvements
- Error handling
- Input validation
- Performance optimizations
- Code refactoring

#### Machine Learning
- Model improvements
- New algorithms
- Feature engineering
- Data preprocessing
- Model validation

#### Documentation
- Code comments
- API documentation
- User guides
- Tutorial content
- README improvements

## Development Setup

### 1. Fork and Clone
```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/Laptop-Price-Predictor.git
cd Laptop-Price-Predictor
```

### 2. Create Development Environment
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Install development dependencies
pip install pytest pytest-flask black flake8 pre-commit
```

### 3. Set Up Pre-commit Hooks
```bash
pre-commit install
```

### 4. Run the Application
```bash
cd website
python app.py
```

Visit `http://localhost:5000` to see the application.

### 5. Run Tests
```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=website

# Run specific test file
pytest tests/test_app.py
```

## Coding Standards

### Python Code Style
- Follow **PEP 8** guidelines
- Use **Black** for code formatting: `black .`
- Use **flake8** for linting: `flake8 .`
- Maximum line length: 88 characters (Black default)

### Code Quality Guidelines

#### General Principles
- Write clear, readable code
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Follow DRY (Don't Repeat Yourself) principle

#### Python Specific
```python
# Good
def calculate_predicted_price(features: list) -> float:
    """Calculate predicted laptop price based on features.
    
    Args:
        features: List of laptop specifications
        
    Returns:
        Predicted price in euros
    """
    # Load model and make prediction
    model = load_model()
    return model.predict([features])[0]

# Avoid
def calc(f):
    m = pickle.load(open('model.pkl', 'rb'))
    return m.predict([f])[0]
```

#### HTML/CSS
- Use semantic HTML elements
- Follow accessibility best practices
- Use CSS classes instead of IDs for styling
- Keep CSS organized and commented

#### JavaScript
- Use modern ES6+ syntax
- Add JSDoc comments for functions
- Handle errors gracefully
- Follow async/await patterns

### Testing
- Write tests for new features
- Maintain existing test coverage
- Use descriptive test names
- Test edge cases and error conditions

```python
def test_price_prediction_valid_input():
    """Test price prediction with valid laptop specifications."""
    features = [8, 1.5, 1, 0, 1, 0, 0, ...]  # Valid features
    result = prediction(features)
    assert isinstance(result, np.ndarray)
    assert result[0] > 0
```

## Submitting Changes

### Pull Request Process

1. **Create a branch** for your feature/fix:
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b bugfix/fix-prediction-error
   ```

2. **Make your changes** following coding standards

3. **Test thoroughly**:
   ```bash
   pytest
   flake8 .
   black --check .
   ```

4. **Commit with clear messages**:
   ```bash
   git add .
   git commit -m "Add: Enhanced price prediction accuracy
   
   - Implemented new feature engineering techniques
   - Added cross-validation for model selection
   - Updated tests for new functionality"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Create Pull Request** on GitHub

### Pull Request Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Code is commented where necessary
- [ ] Documentation updated
- [ ] No new warnings introduced
```

### Review Process

1. **Automated checks** must pass (tests, linting)
2. **Code review** by maintainers
3. **Discussion** and iteration if needed
4. **Approval** and merge by maintainers

## Reporting Issues

### Security Issues
For security vulnerabilities, please email [security@example.com] instead of creating a public issue.

### General Issues
Use GitHub Issues for:
- Bug reports
- Feature requests
- Documentation issues
- Questions about usage

## Feature Requests

When requesting features:
1. **Explain the use case** - why is this feature needed?
2. **Describe the solution** - what should the feature do?
3. **Consider alternatives** - are there other ways to solve this?
4. **Assess impact** - how would this affect existing users?

## Community

### Communication Channels
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Email**: Direct contact with maintainers

### Getting Help
- Check existing issues and documentation first
- Use GitHub Discussions for questions
- Be specific about your problem and environment
- Include code examples when relevant

### Recognition
Contributors will be:
- Listed in project acknowledgments
- Mentioned in release notes for significant contributions
- Invited to join the contributors team for ongoing contributors

## Development Guidelines

### Git Workflow
- Use meaningful commit messages
- Keep commits focused and atomic
- Rebase feature branches before submitting PR
- Use conventional commit format when possible

### Branch Naming
- `feature/description` - for new features
- `bugfix/description` - for bug fixes
- `docs/description` - for documentation updates
- `refactor/description` - for code refactoring

### Code Review Guidelines
When reviewing code:
- Be constructive and respectful
- Focus on code, not the person
- Suggest improvements with examples
- Approve when changes meet standards

## Thank You! 🙏

Your contributions make this project better for everyone. We appreciate your time and effort in helping improve the Laptop Price Predictor!

---

*This contributing guide is a living document. Please suggest improvements through issues or pull requests.*