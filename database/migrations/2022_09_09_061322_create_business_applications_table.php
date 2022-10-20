<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusinessApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('business_applications', function (Blueprint $table) {
            $table->id();
            $table->string('trans_id');
            $table->string('trans_type');
            $table->string('business_name');
            $table->string('business_address');
            $table->string('barangay');
            $table->double('capital_investment',15 ,2);
            $table->string('description');
            $table->string('franchise');
            $table->string('business_type');
            $table->string('leasing');
            $table->string('owners_name');
            $table->string('owners_address');
            $table->string('contact');
            $table->string('email');
            $table->string('user_id');
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('business_applications');
    }
}
