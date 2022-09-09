<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BusinessApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'business_name' => $this->faker->company(),
            'capital_investment' => $this->faker->numberBetween(50000,1000000000),
            'description' => $this->faker->sentence(),
            'franchise' => $this->faker->numberBetween(1,2),
            'owner_name' => $this->faker->name(),
            'contact' => $this->faker->phoneNumber(),
            'email' => $this->faker->email()
        ];
    }
}
