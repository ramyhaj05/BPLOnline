@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="w-full">
            <div class="card border-0 shadow">

                <div class="card-body flex flex-col justify-center">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('A fresh verification link has been sent to your email address.') }}
                        </div>
                    @endif

                    <div class="flex flex-col w-full justify-items-center align-items-center text-center">
                        <img src="{{asset('/images/Homebg.png')}}" alt="" class="w-1/3">
                        <div class="w-full font-bold text-xl">Please check your e-mail address and verify account before you can proceed.</div>
                    </div>
                    <form class="d-inline text-end" method="POST" action="{{ route('verification.resend') }}"> <br>
                        @csrf
                        <button type="submit" class="btn py-1 px-2 font-bold text-blue-400 underline">{{ __('Verification not received? Click here.') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
