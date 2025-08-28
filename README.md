# 💻 Laptop Price Predictor

A machine learning web application that predicts laptop prices based on specifications using a trained regression model.

![Python](https://img.shields.io/badge/Python-3.8+-blue)
![Flask](https://img.shields.io/badge/Flask-2.0+-green)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-1.0+-orange)
![License](https://img.shields.io/badge/License-MIT-red)

## 🎯 Overview

The Laptop Price Predictor is an intelligent system that uses machine learning to estimate laptop prices based on various hardware specifications and features. The project consists of a Jupyter notebook for model training and a Flask web application for real-time predictions.

### Key Features

- **Smart Price Prediction**: Uses advanced regression algorithms to predict laptop prices
- **User-Friendly Interface**: Clean, responsive web interface with dark/light mode support
- **Comprehensive Specs**: Considers RAM, weight, company, type, OS, CPU, GPU, touchscreen, and IPS display
- **Real-time Results**: Instant price predictions with detailed breakdowns
- **Cross-platform**: Works on Windows, macOS, and Linux

## 🚀 Demo

The application provides predictions for laptops based on:
- **Hardware**: RAM (GB), Weight (kg)
- **Brand**: Acer, Apple, Asus, Dell, HP, Lenovo, MSI, Toshiba, Other
- **Type**: 2-in-1 Convertible, Gaming, Netbook, Notebook, Ultrabook, Workstation
- **Operating System**: Windows, macOS, Linux, Other
- **Processor**: Intel Core i3/i5/i7, AMD, Other
- **Graphics**: Intel, AMD, NVIDIA
- **Display**: Touchscreen, IPS Panel support

## 📊 Model Performance

The machine learning model has been trained on a comprehensive dataset of laptop specifications and prices, achieving reliable prediction accuracy for price estimation.

## 🛠️ Installation

### Prerequisites

- Python 3.8 or higher
- pip package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/RensithUdara/Laptop-Price-Predictor.git
   cd Laptop-Price-Predictor
   ```

2. **Create virtual environment** (recommended)
   ```bash
   python -m venv laptop_predictor_env
   
   # Windows
   laptop_predictor_env\Scripts\activate
   
   # macOS/Linux
   source laptop_predictor_env/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   cd website
   python app.py
   ```

5. **Access the application**
   Open your web browser and navigate to `http://localhost:5000`

## 📁 Project Structure

```
Laptop-Price-Predictor/
│
├── model/                          # Machine Learning Model
│   ├── modelbuiding.ipynb         # Jupyter notebook for model training
│   └── predictor.pickle           # Trained model file
│
├── website/                        # Flask Web Application
│   ├── app.py                     # Main Flask application
│   ├── model/
│   │   └── predictor.pickle       # Model file for web app
│   ├── static/                    # Static assets
│   │   ├── logo.png              # Application logo
│   │   ├── style.css             # CSS styles
│   │   └── ui.js                 # JavaScript functionality
│   └── templates/
│       └── index.html            # Main HTML template
│
├── README.md                      # Project documentation
├── requirements.txt               # Python dependencies
├── LICENSE                       # License information
├── CONTRIBUTING.md               # Contribution guidelines
└── CHANGELOG.md                  # Version history
```

## 🔧 Usage

### Web Interface

1. **Launch the application** using the installation steps above
2. **Enter laptop specifications** in the form fields:
   - RAM amount in GB
   - Weight in kg
   - Select company, type, operating system
   - Choose CPU and GPU specifications
   - Toggle touchscreen and IPS display options
3. **Click "Predict Price"** to get the estimated price
4. **View results** with price prediction in your local currency

### Model Training

To retrain the model with new data:

1. Open `model/modelbuiding.ipynb` in Jupyter Notebook
2. Follow the notebook cells to:
   - Load and preprocess data
   - Train the regression model
   - Evaluate model performance
   - Save the trained model

## 🎨 Features

### Web Application
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Input Validation**: Real-time form validation and error handling
- **Modern UI**: Clean, intuitive interface with smooth animations

### Machine Learning
- **Data Preprocessing**: Handles categorical variables and feature encoding
- **Model Selection**: Optimized regression algorithm for price prediction
- **Feature Engineering**: Intelligent handling of laptop specifications
- **Accuracy Optimization**: Model tuned for best prediction performance

## 📊 API Reference

The Flask application provides the following endpoints:

### `GET /`
Returns the main application interface.

### `POST /`
Accepts laptop specifications and returns price prediction.

**Parameters:**
- `ram`: RAM in GB (integer)
- `weight`: Weight in kg (float)
- `company`: Laptop manufacturer (string)
- `typename`: Laptop type (string)
- `opsys`: Operating system (string)
- `cpuname`: CPU type (string)
- `gpuname`: GPU type (string)
- `touchscreen`: Touchscreen support (boolean)
- `ips`: IPS display (boolean)

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Run tests and ensure code quality
5. Commit changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

## 📈 Future Enhancements

- [ ] Add more laptop brands and models
- [ ] Implement price trend analysis
- [ ] Add laptop comparison feature
- [ ] Mobile app development
- [ ] API for third-party integration
- [ ] Enhanced model with deep learning
- [ ] Multi-language support
- [ ] Price alerts and notifications

## 🐛 Known Issues

- Model predictions are based on historical data and may not reflect current market fluctuations
- Some specific laptop configurations might not be perfectly represented in the training data

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Rensith Udara** - *Initial work* - [@RensithUdara](https://github.com/RensithUdara)

## 🙏 Acknowledgments

- Thanks to the open-source community for the tools and libraries
- Dataset contributors for providing laptop specification data
- Flask and Scikit-learn teams for excellent frameworks
- All contributors who help improve this project

## 📞 Support

For support, email [your-email@example.com] or create an issue in the repository.

## 🔗 Links

- [GitHub Repository](https://github.com/RensithUdara/Laptop-Price-Predictor)
- [Report Bug](https://github.com/RensithUdara/Laptop-Price-Predictor/issues)
- [Request Feature](https://github.com/RensithUdara/Laptop-Price-Predictor/issues)

---

⭐ **Star this repository if you found it helpful!** ⭐