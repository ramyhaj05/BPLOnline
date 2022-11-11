<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRenewalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('renewals', function (Blueprint $table) {
            $table->id();
            $table->string('trans_id');
            $table->string('account_number');
            $table->string('gross_income');
            $table->string('owners_name');
            $table->string('contact');
            $table->string('email');
            $table->string('status');
            $table->string('year');
            $table->string('brgy');
            $table->string('itr');
            $table->string('user_id');
            $table->softDeletes();
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
        Schema::dropIfExists('renewals');
    }
}
