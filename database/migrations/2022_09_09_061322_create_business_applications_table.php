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
            $table->string('trans_type');
            $table->string('business_name');
            $table->string('business_addres');
            $table->string('blk');
            $table->string('lot');
            $table->string('barangay');
            $table->string('subdivision');
            $table->double('capital_investment',10 ,2);
            $table->string('description');
            $table->string('franchise');
            $table->string('business_type');
            $table->string('leasing');
            $table->string('owner_name');
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
