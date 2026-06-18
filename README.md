# Data Handling and Visualization Project

This repository contains a full-stack Data Handling and Visualization project for restaurant order prediction. It includes a Python machine learning backend and a Next.js frontend application that lets users enter conditions such as cuisine, time of day, weather, and hunger level, then view whether a food order is likely.

The project demonstrates the complete workflow of collecting structured data, training a classification model, saving reusable model artifacts, exposing predictions through an API, and presenting results through an interactive visualization dashboard.

## Project Report

- [View the complete project report](Report.pdf)
- [View the editable LaTeX source](Report.tex)

## Project Overview

The system predicts restaurant ordering behavior using a small restaurant order dataset. The prediction is based on four main input factors:

- Cuisine type
- Time of day
- Weather
- Hunger level

The backend handles data processing, model training, inference, probability generation, and saved model artifacts. The frontend provides a user-friendly interface for submitting inputs and viewing prediction results with probability and feature-importance visualizations.

## Repository Structure

```text
.
├── Backend Model/
│   ├── app.ipynb
│   ├── train_model.ipynb
│   ├── Infarence code.ipynb
│   ├── restaurant_orders_500.csv
│   ├── nb_model.pkl
│   ├── encoders.pkl
│   ├── probability_data.json
│   ├── class_distribution.png
│   ├── confusion_matrix.png
│   ├── feature_distribution.png
│   ├── feature_importance.png
│   └── requirments.txt
├── Frontend App/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── types/
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── README.md
├── .gitignore
└── README.md
```

## Backend Model

The backend folder contains the data science and machine learning portion of the project.

### Main Files

- `restaurant_orders_500.csv`: sample dataset used for training and analysis.
- `train_model.ipynb`: notebook for preparing the dataset and training the model.
- `app.ipynb`: backend/API notebook for serving prediction logic.
- `Infarence code.ipynb`: inference notebook for testing saved model predictions.
- `nb_model.pkl`: saved trained model.
- `encoders.pkl`: saved encoders used to transform categorical input values.
- `probability_data.json`: probability output data used by the application.
- `class_distribution.png`: class balance visualization.
- `confusion_matrix.png`: model performance visualization.
- `feature_distribution.png`: feature distribution chart.
- `feature_importance.png`: feature importance chart.
- `requirments.txt`: Python package list for backend dependencies.

### Backend Technologies

- Python
- Flask
- Flask-CORS
- Scikit-learn
- Pandas
- NumPy
- Joblib
- Matplotlib
- Seaborn
- Pyttsx3

### Backend Setup

```bash
cd "Backend Model"
python -m venv .venv
.venv\Scripts\activate
pip install -r requirments.txt
```

The backend is designed to provide prediction support for the frontend through endpoints such as:

- `/api/predict`
- `/api/health`

The frontend expects the backend API to run locally at:

```text
http://localhost:5000
```

## Frontend App

The frontend is a Next.js application named `restaurant-app`. It provides the user interface for entering prediction inputs and displaying visual results.

### Main Frontend Features

- Restaurant order prediction form.
- Inputs for cuisine, time of day, weather, and hunger level.
- API integration using Axios.
- Prediction summary display.
- Probability distribution visualization.
- Feature importance visualization.
- Clean dashboard-style interface.

### Important Frontend Files

- `src/app/page.tsx`: main application page.
- `src/components/PredictionForm.tsx`: form for prediction inputs.
- `src/components/PredictionSummary.tsx`: prediction result summary.
- `src/components/VisualizationDashboard.tsx`: charts and probability display.
- `src/lib/api.ts`: connects the frontend to the Flask backend.
- `src/lib/predict.js`: local prediction-related helper logic.
- `src/types/index.ts`: TypeScript types used by the app.

### Frontend Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Axios
- Lucide React
- Recharts

### Frontend Setup

```bash
cd "Frontend App"
npm install
npm run dev
```

Open the application in the browser:

```text
http://localhost:3000
```

## How the Project Works

1. The restaurant order dataset is prepared and analyzed in the backend notebooks.
2. Categorical features such as cuisine, weather, time of day, and hunger level are encoded.
3. A machine learning classifier is trained to predict whether a user will place an order.
4. The trained model and encoders are saved as `.pkl` files.
5. A Flask API receives frontend input and returns prediction probabilities.
6. The Next.js frontend sends user selections to the backend and displays the result.
7. The visualization dashboard explains the prediction using probability and feature-importance views.

## Files Not Included in Git

The following local/generated files are intentionally ignored:

- `node_modules/`
- `.next/`
- `.env.local`
- Python virtual environments
- Python cache files
- Build output folders

This keeps the repository clean and easy to clone.

## Project Purpose

This project was built for the Data Handling and Visualization course. It shows how raw tabular data can be transformed into a working predictive application with visual insights. The project connects data handling, model training, backend integration, and frontend visualization into one understandable full-stack workflow.
