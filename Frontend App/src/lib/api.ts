import axios, { AxiosError } from "axios";

const API_URL = 'http://localhost:5000';

export async function predictOrder(input: any): Promise<any> {
  try {
    console.log('🚀 Starting prediction...');
    console.log('📍 API URL:', API_URL);
    console.log('📦 Input data:', input);

    // Build request body with correct field names
    const requestBody = {
      cuisine: input.cuisine,
      timeOfDay: input.timeOfDay,
      weather: input.weather,
      hungerLevel: input.hungerLevel,
    };

    console.log('📤 Sending request body:', requestBody);

    // Make fetch request
    // FIX: Template literals must be enclosed in backticks (`)
    const response = await axios.post(`${API_URL}/api/predict`, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    console.log('📥 Response received');
    console.log('📊 Response status:', response.status);
    console.log('📊 Response statusText:', response.statusText);

    // Get response data
    const responseData = response.data;
    console.log('📄 Response data:', responseData);

    // Success!
    // NOTE: axios throws an error for 4xx/5xx statuses by default,
    // so if we reach this line, the request was successful (status 2xx).
    // The `if (response.status >= 400)` check was redundant.
    console.log('✅ Prediction successful!');
    console.log('✅ Prediction result:', responseData);

    return responseData;
  } catch (error: any) {
    console.error('❌ Prediction error:', error.message);

    // Provide more detailed error logging if it's an axios error
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('❌ Error data:', axiosError.response.data);
        console.error('❌ Error status:', axiosError.response.status);
      } else if (axiosError.request) {
        // The request was made but no response was received
        console.error('❌ No response received:', axiosError.request);
      }
    } else {
      // Something else happened in setting up the request
      console.error('❌ Full error:', error);
    }
    throw error;
  }
}

export async function checkHealth(): Promise<boolean> {
  try {
    console.log('💚 Checking health...');
    // FIX: Template literals must be enclosed in backticks (`)
    console.log(`📍 Health URL: ${API_URL}/api/health`);

    // FIX: Template literals must be enclosed in backticks (`)
    const response = await axios.get(`${API_URL}/api/health`);

    console.log('💚 Health check status:', response.status);

    if (response.status === 200) {
      const data = response.data;
      console.log('✅ Server is healthy:', data);
      return true;
    } else {
      // This block is unlikely to be hit as axios throws on non-200 status
      console.error('❌ Server unhealthy, status:', response.status);
      return false;
    }
  } catch (error: any) {
    // This catch block will handle non-200 responses and network errors
    console.error('❌ Health check failed:', error.message);
    if (axios.isAxiosError(error) && error.response) {
      console.error('❌ Server responded with status:', error.response.status);
    }
    return false;
  }
}
