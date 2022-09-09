<?php

namespace Database\Seeders;

use App\Models\BusinessApplication;
use Illuminate\Database\Seeder;

class BusinessApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        BusinessApplication::factory(20)->create();
    }
}
