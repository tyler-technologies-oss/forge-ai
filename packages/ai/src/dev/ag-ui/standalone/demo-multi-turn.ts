import { IDatePickerComponent } from '@tylertech/forge';
import {
  AgentRunner,
  AgUiAdapter,
  type ToolDefinition,
  type AgUiAdapterConfig,
  renderMarkdown,
  HandlerContext
} from '../../../lib/ai-chatbot';

type ShowToastFn = (message: string, theme?: 'error' | 'success' | 'warning' | 'info') => void;

interface WeatherParams {
  destination: string;
  date: string;
}

interface LocationParams {
  destination: string;
}

interface HotelParams {
  destination: string;
  checkIn: string;
}

interface Restaurant {
  name: string;
  cuisine: string;
  rating: number;
  priceRange: string;
}

interface Hotel {
  name: string;
  rating: number;
  price: number;
  amenities: string[];
}

interface Weather {
  temperature: number;
  condition: string;
  precipitation: string;
}

interface TripInfoParams {
  destination: string;
  date: string;
  weather: Weather;
  restaurants: Restaurant[];
  hotels: Hotel[];
}

export function createMultiTurnTools(): Array<ToolDefinition<any>> {
  let weatherList: HTMLElement | null = null;
  let restaurantsList: HTMLElement | null = null;
  let hotelsList: HTMLElement | null = null;

  const getWeatherTool: ToolDefinition<WeatherParams> = {
    name: 'getWeather',
    displayName: 'Get Weather',
    description: 'Get weather forecast for a destination on a specific date',
    parameters: {
      type: 'object' as const,
      properties: {
        destination: { type: 'string', description: 'City name' },
        date: { type: 'string', description: 'Date in YYYY-MM-DD format' }
      },
      required: ['destination', 'date']
    },
    handler: async (context: HandlerContext<WeatherParams>) => {
      const { destination, date } = context.args;
      await new Promise(resolve => setTimeout(resolve, 800));

      const forecasts = [
        { temp: 72, condition: 'Sunny', precipitation: '0%' },
        { temp: 68, condition: 'Partly Cloudy', precipitation: '10%' },
        { temp: 65, condition: 'Light Rain', precipitation: '40%' }
      ];
      const forecast = forecasts[Math.floor(Math.random() * forecasts.length)];

      return {
        destination,
        date,
        temperature: forecast.temp,
        condition: forecast.condition,
        precipitation: forecast.precipitation
      };
    }
  };

  const findRestaurantsTool: ToolDefinition<LocationParams> = {
    name: 'findRestaurants',
    displayName: 'Find Restaurants',
    description: 'Find popular restaurants in a destination',
    parameters: {
      type: 'object' as const,
      properties: {
        destination: { type: 'string', description: 'City name' }
      },
      required: ['destination']
    },
    handler: async (context: HandlerContext<LocationParams>) => {
      const { destination } = context.args;
      await new Promise(resolve => setTimeout(resolve, 1000));

      return {
        destination,
        restaurants: [
          { name: 'Le Bistro', cuisine: 'French', rating: 4.5, priceRange: '$$$' },
          { name: 'Pasta Paradise', cuisine: 'Italian', rating: 4.3, priceRange: '$$' },
          { name: 'Sakura Gardens', cuisine: 'Japanese', rating: 4.7, priceRange: '$$$$' }
        ]
      };
    }
  };

  const findHotelsTool: ToolDefinition<HotelParams> = {
    name: 'findHotels',
    displayName: 'Find Hotels',
    description: 'Find available hotels in a destination',
    parameters: {
      type: 'object' as const,
      properties: {
        destination: { type: 'string', description: 'City name' },
        checkIn: { type: 'string', description: 'Check-in date in YYYY-MM-DD format' }
      },
      required: ['destination', 'checkIn']
    },
    handler: async (context: HandlerContext<HotelParams>) => {
      const { destination, checkIn } = context.args;
      await new Promise(resolve => setTimeout(resolve, 900));

      return {
        destination,
        checkIn,
        hotels: [
          { name: 'Grand Plaza Hotel', rating: 4.6, price: 250, amenities: ['Pool', 'Spa', 'Restaurant'] },
          { name: 'Downtown Suites', rating: 4.2, price: 180, amenities: ['Gym', 'Free Breakfast'] },
          { name: 'Boutique Inn', rating: 4.8, price: 320, amenities: ['Rooftop Bar', 'Concierge'] }
        ]
      };
    }
  };

  const presentTripInfoTool: ToolDefinition<TripInfoParams> = {
    name: 'presentTripInfo',
    displayName: 'Present Trip Info',
    description:
      'Display trip information to the user including weather, restaurants, and hotels. This should be called once all information has been gathered.',
    parameters: {
      type: 'object' as const,
      properties: {
        destination: { type: 'string', description: 'City name' },
        date: { type: 'string', description: 'Trip date' },
        weather: {
          type: 'object',
          description: 'Weather information',
          properties: {
            temperature: { type: 'number', description: 'Temperature in Fahrenheit' },
            condition: { type: 'string', description: 'Weather condition' },
            precipitation: { type: 'string', description: 'Precipitation chance' }
          }
        },
        restaurants: {
          type: 'array',
          description: 'List of recommended restaurants',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              cuisine: { type: 'string' },
              rating: { type: 'number' },
              priceRange: { type: 'string' }
            }
          }
        },
        hotels: {
          type: 'array',
          description: 'List of available hotels',
          items: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              rating: { type: 'number' },
              price: { type: 'number' },
              amenities: { type: 'array', items: { type: 'string' } }
            }
          }
        }
      },
      required: ['destination', 'date', 'weather', 'restaurants', 'hotels']
    },
    handler: async (context: HandlerContext<TripInfoParams>) => {
      const { weather, restaurants, hotels } = context.args;

      weatherList = document.getElementById('mtWeatherList');
      restaurantsList = document.getElementById('mtRestaurantsList');
      hotelsList = document.getElementById('mtHotelsList');

      if (weatherList) {
        weatherList.innerHTML = `
          <forge-list-item>
            <div slot="start">🌡️</div>
            <span>${weather.temperature}°F, ${weather.condition}</span>
            <span slot="secondary-text">Precipitation: ${weather.precipitation}</span>
          </forge-list-item>
        `;
      }

      if (restaurantsList) {
        restaurantsList.innerHTML = restaurants
          .map(
            ({ name, cuisine, rating, priceRange }: Restaurant) => `
          <forge-list-item>
            <div slot="start">🍽️</div>
            <span>${name}</span>
            <span slot="secondary-text">${cuisine} • ${priceRange} • ⭐ ${rating}</span>
          </forge-list-item>
        `
          )
          .join('');
      }

      if (hotelsList) {
        hotelsList.innerHTML = hotels
          .map(
            ({ name, rating, price, amenities }: Hotel) => `
          <forge-list-item>
            <div slot="start">🏨</div>
            <span>${name}</span>
            <span slot="secondary-text">$${price}/night • ⭐ ${rating} • ${amenities.join(', ')}</span>
            </div>
          </forge-list-item>
        `
          )
          .join('');
      }

      return { success: true };
    }
  };

  return [getWeatherTool, findRestaurantsTool, findHotelsTool, presentTripInfoTool];
}

export function initMultiTurnDemo(config: AgUiAdapterConfig, tools: ToolDefinition[], showToast: ShowToastFn): void {
  const planBtn = document.getElementById('mtPlanBtn') as HTMLButtonElement;
  const progress = document.getElementById('mtProgress') as HTMLElement;
  const destinationInput = document.getElementById('mt-destination') as HTMLInputElement;
  const datePicker = document.getElementById('mt-date-picker') as IDatePickerComponent;
  const resultsSection = document.getElementById('mtResultsSection') as HTMLElement;
  const weatherList = document.getElementById('mtWeatherList') as HTMLElement;
  const restaurantsList = document.getElementById('mtRestaurantsList') as HTMLElement;
  const hotelsList = document.getElementById('mtHotelsList') as HTMLElement;
  const agentMessage = document.getElementById('mtAgentMessage') as HTMLElement;

  const formInputs = [planBtn, destinationInput, datePicker];

  // Set default date to one week from today
  datePicker.value = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  planBtn.addEventListener('click', async () => {
    const destination = destinationInput.value.trim();
    const date = datePicker.value;

    if (!destination || !date) {
      showToast('Please enter a destination and date', 'warning');
      return;
    }

    progress.style.removeProperty('display');
    formInputs.forEach(input => (input.disabled = true));
    weatherList.innerHTML = '';
    restaurantsList.innerHTML = '';
    hotelsList.innerHTML = '';
    agentMessage.innerHTML = '';
    resultsSection.style.removeProperty('display');

    const prompt = `Help me plan a trip to ${destination} on ${date}. I need information about the weather, good restaurants, and hotel options. Use the available tools to gather this information, then call presentTripInfo with the collected data to display it to the user.`;

    console.log('[Multi-Turn Demo] Starting agent with prompt:', prompt);

    try {
      const adapter = new AgUiAdapter({ ...config });
      const result = await AgentRunner.run({
        adapter,
        tools,
        prompt,
        mode: 'multi-turn',
        onStart: messageId => {
          console.log('[Multi-Turn Demo] onStart:', messageId);
        },
        onToolCall: toolCall => {
          console.log('[Multi-Turn Demo] onToolCall:', {
            id: toolCall.id,
            name: toolCall.name,
            status: toolCall.status,
            args: toolCall.args,
            result: toolCall.result
          });
        },
        onComplete: result => {
          console.log('[Multi-Turn Demo] onComplete:', {
            turns: result.turns,
            toolCallsCount: result.toolCalls.length,
            stoppedReason: result.stoppedReason,
            success: result.success
          });
        }
      });

      agentMessage.innerHTML = renderMarkdown(result.finalMessage.content);

      console.log('[Multi-Turn Demo] Final result:', result);
      showToast('Trip planning completed!', 'success');
    } catch (error) {
      console.error('[Multi-Turn Demo] Error:', error);
      showToast(`Planning failed: ${(error as Error).message}`);
    } finally {
      progress.style.display = 'none';
      formInputs.forEach(input => (input.disabled = false));
    }
  });
}
