@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center content-center">
        <div class="w-3/4 md:w-1/3 pt-16">
            <div class="card ring ring-pink-300">

                <div class="card-body pt-5">
                    <form method="POST" action="{{ route('login') }}" class="flex flex-col justify-content-center items-center">
                        @csrf

                        <div class="row mb-3 w-2/3">
                            <div class="w-full text-center pb-3 tracking-widest font-bold font-sans text-2xl">LOGIN</div>
                            <div class="w-full">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3 w-2/3">
                            <div class="w-full">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3 w-full">
                            <div class="w-full ">
                                <div class="form-check flex flex-row justify-content-center content-center">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label px-2" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0 w-full flex flex-col justify-content-center content-center">
                            <div class="w-1/2">
                                <button type="submit" class=" w-full btn text-blue-400 ring-1 ring ring-blue-400 hover:text-white hover:bg-blue-400 font-medium">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
