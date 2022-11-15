<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RenewalUploading extends Model
{
    use HasFactory;
    protected $fillable = [
        'gross',
        'ITR',
        'insurance',
        'brgy'
    ];
}
