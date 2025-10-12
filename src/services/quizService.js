import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_SERVER_URL;// Adjust based on your backend's API base path

const quizService = {
  /**
   * Create a new quiz
   * @param {Object} quizData - Quiz data including title and questions
   * @returns {Promise<Object>} - Resolves to the created quiz object
   */
  async createQuiz(quizData) {
    try {
      const authToken = localStorage.getItem('authToken'); // Get the user's token
      const response = await axios.post(`${API_BASE_URL}/`, quizData, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Include token for authentication
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating quiz:', error);
      throw error.response ? error.response.data : error;
    }
  },

  /**
   * Fetch all quizzes accessible to the logged-in user
   * @returns {Promise<Array>} - Resolves to an array of quizzes
   */
  async getQuizzes() {
    try {
      const authToken = localStorage.getItem('authToken'); // Get the user's authToken
      const response = await axios.get(API_BASE_URL, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Include authToken for authentication
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      throw error.response ? error.response.data : error;
    }
  },

  /**
   * Fetch details of a specific quiz by ID
   * @param {string} quizId - The ID of the quiz
   * @returns {Promise<Object>} - Resolves to the quiz object
   */
  async getQuizById(quizId) {
    try {
      const authToken = localStorage.getItem('authToken'); // Get the user's authToken
      const response = await axios.get(`${API_BASE_URL}/${quizId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Include authToken for authentication
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching quiz details:', error);
      throw error.response ? error.response.data : error;
    }
  },

  /**
   * Submit answers for a quiz
   * @param {string} quizId - The ID of the quiz
   * @param {Array} answers - Array of user answers
   * @returns {Promise<Object>} - Resolves to the submission result
   */
  async submitAnswers(quizId, answers) {
    try {
      const authToken = localStorage.getItem('authToken'); // Get the user's authToken
      const response = await axios.post(`${API_BASE_URL}/${quizId}/submit`, { answers }, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Include authToken for authentication
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting answers:', error);
      throw error.response ? error.response.data : error;
    }
  },
};

export default quizService;
